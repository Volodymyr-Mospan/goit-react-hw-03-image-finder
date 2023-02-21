import { React, Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { addImages } from 'services/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      const result = await addImages(this.state.query, 1);
      this.setState({
        images: result.hits,
        page: 1,
        totalHits: result.totalHits,
      });
    }
  }

  loadMore = async () => {
    const { query, page } = this.state;
    const result = await addImages(query, page + 1);
    console.log(result);
    this.setState(prevState => ({
      images: [...prevState.images, ...result.hits],
      page: prevState.page + 1,
    }));
  };

  handleSearch = ({ query }) => {
    this.setState({ query });
  };

  render() {
    const { images, page, totalHits } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSabmit={this.handleSearch} />

        {!!images.length && <ImageGallery images={images} />}
        {!!images.length && page !== Math.ceil(totalHits / 12) && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
