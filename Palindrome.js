
// trim
function trim(w){
    x = w.trim();
    return x;
}

 //lower case
 function lower(w){
    x =  w.toLowerCase();
    return x;
 }


 //strip
function strip(w){
    x = w.replace(/[^A-Za-z]/g, "");
    return x
}

// stripped_w = strip(lower_w);
// console.log(stripped_w);

 //reverse
function reverse(w){
    x = [];
    var y;
    for(let i = w.length -1; i >=0;i--){
        x.push(w[i]);
    };
    y = x.join('');
    return y;
}


 //check
 function check(w,o){
     if(w === o){
         return true;
     } else {
         return false;
     };

 }




 function isPalindrome(){

     let input = document.getElementById('input').value;
     let original = input;
     let trimmed_w = trim(input);
     let t_original = trim(original);
     let lower_w = lower(trimmed_w);
     let lower_o = lower(t_original)
     let strip_w = strip(lower_w);
     let strip_o = strip(lower_o);

     let reversed_w = reverse(strip_w);
     isPalindrome = check(reversed_w, strip_o);
     const heading = document.getElementById("display")
     if(isPalindrome){
         // heading.innerHTML = `${input} is a PALINDROME`;
         // heading.style.color = 'green';
         let confirmation = " is a Palindrome"
         addListItemYes(input,confirmation);

     } else {
         // heading.innerHTML = "Nope! Try again!";
         // heading.style.color = "red";
         let confirmation = " is NOT a Palindrome"
         addListItemNo(input,confirmation);

     };



 };

function addListItemYes(input, confirmation){
    const parent = document.getElementById('listItemDiv');
    const listText = `${input} ${confirmation}`;
    const item = document.createElement('div');
    item.classList.add("listItemBoxYes");
    item.innerHTML = '<h3 class="listItem">'  + listText + '</h3>';
    //parent.appendChild(item);
    parent.insertBefore(item, parent.childNodes[0]);

}

function addListItemNo(input, confirmation){
    const parent = document.getElementById('listItemDiv');
    const listText = `${input} ${confirmation}`;
    const item = document.createElement('div');
    item.classList.add("listItemBoxNo");
    item.innerHTML = '<h3 class="listItem">'  + listText + '</h3>';
    //parent.appendChild(item);
    parent.insertBefore(item, parent.childNodes[0]);

}

// let submitBtn = document.getElementById('submitButton');
// submitBtn.addEventListener('click',isPalindrome);


