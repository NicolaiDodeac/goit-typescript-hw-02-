import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "../services/unsplashAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Photo } from "../services/unsplashAPI.types";

import s from "./App.module.css";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<{
    urls: { regular: string } | null;
    alt_description: string;
  } | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchImages(query, page);
        if (!res || !res.results.length) {
          setIsEmpty(true);
          return;
        }
        setPhotos((prev) => [...prev, ...res.results]);
        setShowLoadMore(page < Math.ceil(res.total / 20));
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  useEffect(() => {
    if (page > 1) {
      const imageHeight = 200;
      window.scrollBy({
        top: imageHeight * 2,
        behavior: "smooth",
      });
    }
  }, [photos, page]);

  const handleSearchSubmit = (value: string): void => {
    setQuery(value);
    setPage(1);
    setPhotos([]);
    setShowLoadMore(false);
    setIsError(false);
    setIsEmpty(false);
  };

  const handleClick = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (photo: Photo): void => {
    const modalContent = {
      urls: { regular: photo.urls.regular },
      alt_description: photo.alt_description || "",
    };
    setModalImage(modalContent);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isError && (
        <ErrorMessage text="Something went wrong, please try again later." />
      )}
      {isEmpty && <h1>No more results found. Please try a different query.</h1>}
      {photos.length > 0 && (
        <ImageGallery photos={photos} handleOpenModal={handleOpenModal} />
      )}
      {photos.length > 0 && !isLoading && <LoadMoreBtn onClick={handleClick} />}
      <ImageModal
        modalImage={modalImage}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <div className={s.more}>
        {isLoading && <Loader />}
        {showLoadMore && <button onClick={handleClick}>Load More</button>}
      </div>
    </div>
  );
};

export default App;
