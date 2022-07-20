import { html } from 'lit';
import '../src/search-screen.js';

export default {
  title: 'SearchScreen',
  component: 'search-screen',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <search-screen
      style="--search-screen-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </search-screen>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
