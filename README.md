# about
这个根据上个[react app github](https://github.com/liuuu/react-github/tree/addTesting),
  [展示](https://react-github-popular.netlify.com/).
用redux重构的App, UI完全相同, 只是用了redux来管理data source, redux store也很小.


## about testing

- 根据redux doc, 把`connected component`的component单独export出, 然后测试
- 用了moxios去截获`action creator`中`redux-thunk`的异步请求

## code-splitting
- add code-splitting to the project
- fixed all the previous warning of `components defined but never used`
