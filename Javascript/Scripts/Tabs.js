var tabLinks;
var tabPanels;
// This is my first javascript comment, same as C based languages.
window.onload = function()
{
  tabLinks = document.getElementById("tabs").getElementsByTagName("li");

  tabPanels = document.getElementById("containers").getElementsByTagName("section");

  //First one selected
  displayPanel(tabLinks[0]);

  for(var i = 0; i < tabLinks.length; i++)
  {
      tabLinks[i].onclick = function()
      {
          displayPanel(this);
          return false;
      }

      tabLinks[i].onfocus = function()
      {
          displayPanel(this);
          return false;
      }
  }
}

function displayPanel(tabClicked)
{
  for(var i = 0; i < tabLinks.length; i++)
      {
          if(tabLinks[i] == tabClicked)
          {
              tabLinks[i].classList.add("active");
              tabPanels[i].style.display = "block";
          }
          else
          {
              tabLinks[i].classList.remove("active");
              tabPanels[i].style.display = "none";
          }
      }
}
