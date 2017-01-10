module.exports = function () {
  return (
    `<form id="new-cat" action="/api/v1/cats" method="post">
        <fieldset>
          <input 
            placeholder="Cat Name" 
            type="text" 
            name="name" 
            id="cat-name"/>
          <input 
            placeholder="Age" 
            type="number" 
            name="age" id="cat-age"/>
          <input 
            placeholder="Cat Image url" 
            type="text" 
            name="image" 
            id="cat-image"/>
        </fieldset>
        <input type="submit" name="submit" value="submit" id="submit"/>
      </form>`
  )
}
