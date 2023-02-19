import { React, Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { addImages } from 'services/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      const result = await addImages(this.state.query);
      this.setState({ images: result.hits });
    }
  }

  handleSearch = ({ query }) => {
    this.setState({ query });
  };

  render() {
    const { images } = this.state;

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
      </div>
    );
  }
}
