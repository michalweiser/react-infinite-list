## v0.2.2 (2015-06-12)

Improved scrolling behavior with webkit. Sometimes, when using some point or touch devices
whole page was scrolled to the bottom, even though the scroll event was emit from the list
view.

Removed unecessary topItem in favor of padding of the first item. Also, styles need not to
be passed down to the list item view.

Thanks crudo!

## v0.2.1 (2015-06-03)

Added MIT license and repository config to package.json. Thanks cesarandreu!

## v0.2.0 (2015-06-02)

`numOfVisibleItems` parameter was removed in favor of `height`. See README.md and `example.jsx`
for more details. Basically, the whole list height is more convenient to use and often specified
by UX ppl in advance. Number of visible items are calcualted based on `height` and `itemHeight`
by the component itself.

## v0.1.1 (2015-06-01)

Code is simplified. Browser umd header is fixed to provide correct react dependency.

## v0.1.0 (2015-06-01)

react-infinite-list got serious. Upgraded to React 13. Webpack was introduced for convenient
development. Targets are built for node and browser worlds.
