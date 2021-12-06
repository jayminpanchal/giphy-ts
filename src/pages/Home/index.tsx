import { Row, Col, Input, Card, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchSearchImages } from "../../store/actions";
import {
  getImagesSelector,
  getPaginationSelector,
} from "../../store/selectors";
import { GIFObject } from "../../types";

const { Search } = Input;
const { Meta } = Card;

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<GIFObject | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch();
  const images = useSelector(getImagesSelector);
  const pagination = useSelector(getPaginationSelector);

  const onSearch = (value: string) => {
    setSearchQuery(value);
    fetchResults(value, true);
  };

  const hideModal = () => {
    setSelectedImage(null);
  };

  const fetchResults = (q: string, isInitial?: boolean) => {
    dispatch(
      fetchSearchImages({
        q,
        offset: isInitial ? 0 : pagination.count + pagination.offset,
      })
    );
  };

  return (
    <div className="page-container">
      <div className="search-input-wrapper">
        <Row align="middle" justify="center">
          <Col xs={12}>
            <Search
              placeholder="Search images...."
              onSearch={onSearch}
              enterButton
            />
          </Col>
        </Row>
      </div>
      <div id="resultsContainer">
        <InfiniteScroll
          dataLength={images.length}
          next={() => fetchResults(searchQuery)}
          endMessage={<b>No data available.</b>}
          hasMore={images.length < pagination.total_count}
          loader={<h4>Loading...</h4>}
          scrollableTarget="resultsContainer"
          height={400}
        >
          <Row gutter={8}>
            {images.map((image) => (
              <Col xs={6} key={`IMAGE_${image.id}`} className="imageCard">
                <Card
                  onClick={() => setSelectedImage(image)}
                  cover={
                    <img
                      src={image.images.preview_gif.url}
                      alt={image.slug}
                      className="previewImage"
                    />
                  }
                >
                  <Meta title={image.url} />
                </Card>
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </div>

      <Modal
        title={selectedImage?.url}
        visible={!!selectedImage}
        footer={false}
        onCancel={hideModal}
        width="1024px"
      >
        <div>
          <Row>
            <Col xs={24}>
              <Card
                cover={
                  <img
                    src={selectedImage?.images?.original.url}
                    alt="Original"
                  />
                }
              >
                <Meta title="Original" />
              </Card>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col className="imageCard">
              <Card
                cover={
                  <img
                    src={selectedImage?.images?.downsized.url}
                    alt="Downsized"
                  />
                }
              >
                <Meta title="Downsized" />
              </Card>
            </Col>
            <Col className="imageCard">
              <Card
                cover={
                  <img
                    src={selectedImage?.images?.fixed_width.url}
                    alt="Fixed Width"
                    width={selectedImage?.images?.fixed_width.width}
                    height={selectedImage?.images?.fixed_width.height}
                  />
                }
              >
                <Meta title="Fixed Width" />
              </Card>
            </Col>
            <Col xs={8} className="imageCard">
              <Card
                cover={
                  <img
                    src={selectedImage?.images?.fixed_height.url}
                    alt="Fixed Height"
                  />
                }
              >
                <Meta title="Fixed Height" />
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
