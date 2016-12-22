import { configure } from '@kadira/storybook';

// load all story files with pattern of *.story.js
const req = require.context('../src', true, /.story\.js$/);
const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);