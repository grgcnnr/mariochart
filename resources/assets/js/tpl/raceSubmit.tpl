<div class="row collapse">
  <label>Who won</label>
  <div class="small-10 columns">
    <select class="" name="">
    <% _.each(items, function(item){ %>
      <option value="<%= item.id %>"> <%= item.name %> </option>
    <% }); %>
    </select>
  </div>
  <div class="small-2 columns">
  <button class="button postfix" type="submit">Save</button>
  </div>
</div>
