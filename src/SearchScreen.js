import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class SearchScreen extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      rating: { type: String },
      description: { type: String },
      searchedString: {type: String },
      response: { type: Array },
      value: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        background-color: var(--search-screen-background-color);
      }

      @media only screen and (max-width: 1920px) {
        main {
          flex-grow: 1;
        }
        #results-container {
          width: 750px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .tv-show-container {
          display: flex;
          border-style: solid;
          border-width: 1px;
          padding: 5px;
          margin: 10px;
          width: 200px;
        }
      }

      @media only screen and (max-width: 1200px) {
        #results-container {
          width: 500px;
        }
        .tv-show-container {
          margin: 10px;
          width: 200px;
        }
      }

      @media only screen and (max-width: 576px) {
        #results-container {
          display: block;
          width: auto;
        }
        .tv-show-container {
          display: flex;
          border-style: solid;
          border-width: 1px;
          padding: 5px;
          max-width: 410px;
          width: 380px;
          margin-bottom: 10px;
        }
      }

      @media only screen and (max-width: 400px) {
        #results-container {
          width: auto;
        }
        .tv-show-container {
          display: flex;
          border-style: solid;
          border-width: 1px;
          padding: 5px;
          max-width: 310px;
          width: 290px;
          margin-bottom: 10px;
        }
      }

      @media only screen and (max-width: 319px) {
        main {
          display: none;
        }
        
      }

      .tv-show-container .image {
        flex: 30%;
      }

      .tv-show-container .info {
        flex: 70%;
      }

      .image {
        animation: app-logo-spin infinite 20s linear;
      }

      .image img {
        height: 50px;
        width: 50px;
      }

      // @keyframes app-logo-spin {
      //   from {
      //     transform: rotate(0deg);
      //   }
      //   to {
      //     transform: rotate(360deg);
      //   }
      // }

      #search-tab {
        text-align: center;
      }
      
      #search-tab input[type=text] {
        padding: 6px;
        margin: 8px 0 20px;
        border: none;
        font-size: 16px;
      }

      .title-text {
        font-size: 14px;
        font-weight: bold; 
      }
      .rating-text {
        font-size: 12px; 
        margin-bottom: 10px;
      }
      .desc-text {
        font-size: 12px; 
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.rating = '';
    this.description = '';
    this.response = [];
    this.searchedString = '';
  }

  onChange(e) {
    this.value = e.target.value;
    console.log('this.value: ', this.value);
    this.searchedString = this.value;
  }
  
  firstUpdated() {
    console.log('searchedString: ', this.searchedString);

    // fetch("https://api.tvmaze.com/search/shows?q=" + this.searchedString)
    fetch("https://api.tvmaze.com/singlesearch/shows?q=" + this.searchedString)
      .then((r) => r.json())
        .then((r) => {
          console.log('r: ', r);
          this.response = r.results;
          this.name = r.name;
          this.rating = r.rating.average;
          this.description = r.summary;
          this.image = r.image.medium
      });

      
// ${response.map((item) => html`
      // return this if /search/shows will be used  
// `)}

    return html`
    <div class='tv-show-container'>
      <div class='image'><img alt="open-wc logo" src=${this.image}></div>
      <div class='info'>
        <div class='title-text'>${this.name}</div>
        <div class='rating-text'>${this.rating}</div>
        <div class='desc-text'>${this.description}</div>
      </div>
    </div>
    `;
  }

  render() {
    const { response } = this;
    return html`
      <main>
        <div id='search-tab'>
            <input value="${this.value}" @change=${this.onChange} type='text' placeholder='Search'>
        </div>

        <div id='results-container'>

          ${this.firstUpdated()}
          
          <div class='tv-show-container'>
            <div class='image'><img alt="open-wc logo" src=${logo}></div>
            <div class='info'>
              <div class='title-text'>Static Title</div>
              <div class='rating-text'>10/10</div>
              <div class='desc-text'>For display purposes of mobile friendly approach</div>
            </div>
          </div>

          <div class='tv-show-container'>
            <div class='image'><img alt="open-wc logo" src=${logo}></div>
            <div class='info'>
              <div class='title-text'>Static Title</div>
              <div class='rating-text'>10/10</div>
              <div class='desc-text'>For display purposes of mobile friendly approach</div>
            </div>
          </div>

          <div class='tv-show-container'>
            <div class='image'><img alt="open-wc logo" src=${logo}></div>
            <div class='info'>
              <div class='title-text'>Static Title</div>
              <div class='rating-text'>10/10</div>
              <div class='desc-text'>For display purposes of mobile friendly approach</div>
            </div>
          </div>

          <div class='tv-show-container'>
            <div class='image'><img alt="open-wc logo" src=${logo}></div>
            <div class='info'>
              <div class='title-text'>Static Title</div>
              <div class='rating-text'>10/10</div>
              <div class='desc-text'>For display purposes of mobile friendly approach</div>
            </div>
          </div>

          <div class='tv-show-container'>
            <div class='image'><img alt="open-wc logo" src=${logo}></div>
            <div class='info'>
              <div class='title-text'>Static Title</div>
              <div class='rating-text'>10/10</div>
              <div class='desc-text'>For display purposes of mobile friendly approach</div>
            </div>
          </div>

          <div class='tv-show-container'>
            <div class='image'><img alt="open-wc logo" src=${logo}></div>
            <div class='info'>
              <div class='title-text'>Static Title</div>
              <div class='rating-text'>10/10</div>
              <div class='desc-text'>For display purposes of mobile friendly approach</div>
            </div>
          </div>

        </div>
      </main>
    `;
  }
}
