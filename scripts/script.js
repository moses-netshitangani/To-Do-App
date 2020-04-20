var num = 0;

// Adds new reminder
function add()
{
  // increment # of Reminders
  num += 1;
  // The parent container (template)
  var container = document.getElementsByClassName("outer-container")[0];
  // copy div
  var temp_div = document.createElement('div');
  temp_div.className = "reminder";
  // check button
  var btn = document.createElement("button");
  btn.className = "button hlw-button";
  // image for button
  var img = document.createElement("img");
  img.id = "empty"; img.src = "icons/circle.png";
  // second button
  var btn2 = document.createElement("button");
  btn2.className = "button field-button";
  // div inside the second button
  var inside_div = document.createElement("div");
  inside_div.className = "text-area";
  // The paragraph
  var p = document.createElement("p");
  p.id = num;
  // The text input
  var text_input = document.createElement("input");
  text_input.className = "input-text";
  text_input.onmouseout = function(){getText(p.id)};
  text_input.onclick = function(){edit(p.id)};
  btn2.onclick = function(){edit(p.id)};

  btn.appendChild(img);
  inside_div.appendChild(p);
  inside_div.appendChild(text_input);
  btn2.appendChild(inside_div)
  temp_div.appendChild(btn);
  temp_div.appendChild(btn2);
  container.appendChild(temp_div);

  img.onclick = function(){fill(p.id)};
}

// Get user text
function getText(id)
{
  var source = document.getElementsByClassName("input-text")[id-1];
  var text = document.getElementById(id).innerHTML = source.value;
  source.style.display = 'none';
}

// Clicked reminder
function fill(id)
{
  var parag = document.getElementById(id);
  var circle = parag.parentNode.parentNode.parentNode.firstChild.firstChild;
  if(circle.id == "empty")
  {
    circle.src="icons/filledcircle.png";
    strike(parag, circle);
    circle.id = "filled";
  }
  else
  {
    circle.src="icons/circle.png";
    strike(parag, circle);
    circle.id = "empty";
  }
}

// Strikethrough
function strike(para, circle)
{
  if(circle.id == "empty")
  {
    para.style.textDecoration = "line-through";
  }
  else
  {
    para.style.textDecoration = "none";
  }
}

// The edit function
function edit(id)
{
  var source = document.getElementsByClassName("input-text")[id-1].style.display = "inline-block";
}
