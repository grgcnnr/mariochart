<!DOCTYPE html>
<html>
  <link rel="stylesheet" href="/css/style.css">
  <script id="raceSubmitTpl" type="text/tpl">
    <label for="">Who won</label>
    <select class="" name="">
    <% _.each(items, function(item){ %>
      <option> <%= item.name %> </option>
    <% }); %>

    </select>
    <button type="submit">Save</button>
  </script>
  <script id="raceTpl" type="text/tpl">
    <p>
      <%- racer %> - <small><%- niceDate %></small>
      <% if(canDelete){ %>
        <button data-action='delete'>X</button>
      <% } %>
    </p>
  </script>
  <body>
    <div id="form"></div>
    <div id="mainRegion"> </div>
    <script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
  </body>
</html>
