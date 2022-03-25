function firstFunction(){ 

    // Creates array of base64 names and values from ItemsAndImagees.js items var
    // Grabs from Any first, then grabs the currently selected tier.
    console.log("Creating the dataset");
    console.log(items);
    let anyImages = items.any;
    let otherImages = [];

    if(document.getElementById("easy").checked)
        otherImages = items.easy;
    else if(document.getElementById("medium").checked)
        otherImages = items.medium;
    else if(document.getElementById("hard").checked)
        otherImages = items.hard;
    else if(document.getElementById("elite").checked)
        otherImages = items.elite;
    else if(document.getElementById("master").checked)
        otherImages = items.master;

    // Concateneates the two arrays together. 
    // These are the base64 images to compare to the caaptured information.
    let itemList = anyImages.concat(otherImages);
    console.log(itemList);
    var keys = Object.keys(lsdb);
    
    //Placement UI testing
    var randomList = []
    for(i=0; i < 4; i++){
        randomList.push(keys[Math.floor(Math.random() * (keys.length + 0) + 0)]);
    }
    console.log(randomList);
    for(i=0; i<randomList.length; i++){
        var node = document.createElement("Tificates");
        var img = document.createElement("img");
        var value = document.createElement("value");
        //set style to parent for value
        var text
        if (localStorage.getItem("Checked button") == "easy"){
            text = document.createTextNode(JSON.stringify(JSON.parse(localStorage.getItem(randomList[i])).quantity.easy));
        }
        else if (localStorage.getItem("Checked button") == "medium"){
            text = document.createTextNode(JSON.stringify(JSON.parse(localStorage.getItem(randomList[i])).quantity.medium));
        }
        else if (localStorage.getItem("Checked button") == "hard"){
            text = document.createTextNode(JSON.stringify(JSON.parse(localStorage.getItem(randomList[i])).quantity.hard));
        }
        else if (localStorage.getItem("Checked button") == "elite"){
            text = document.createTextNode(JSON.stringify(JSON.parse(localStorage.getItem(randomList[i])).quantity.elite));
        }
        else if (localStorage.getItem("Checked button") == "master"){
            text = document.createTextNode(JSON.stringify(JSON.parse(localStorage.getItem(randomList[i])).quantity.master));
        }
        img.src = encodeURI("images/items/"+randomList[i]+".png");
        img.setAttribute("class", "loot");
        node.setAttribute('style', 'width:35px; height:35px; background:green; margin:0px 3px 5px 3px; display:flex; align-items:center; text-align:center;data-hover:'+randomList[i]+';');
        img.setAttribute('style', 'background:purple; margin:0 auto;');
        value.setAttribute("style", "position:absolute;")
        node.appendChild(img);
        node.appendChild(text);
        document.getElementsByClassName("loot_display")[i].appendChild(node);
    }
    
    // Use this to try to figure out how to capture the image :((((
    var node1 = document.createElement("test");
    var img1 = document.createElement("test2");
    img1.src = encodeURL(image)
    node1.appendChild(img1);
    document.getElementsByClassName("loot_display")[0].appendChild(node1)

    // randomList.push(JSON.parse(otherImages[Math.floor(Math.random() * (otherImages.length + 0) + 0)]))

    console.log(randomList)
}

function cleardb(){
    [].forEach.call(document.querySelectorAll('.loot'),function(e){
        e.parentNode.removeChild(e);
    });
}

function solution(){
//     //A few notes
//     // - Skip over yellow and white text
//     // - Is an autocompletion
//     // - pixel comparison each time
//     // - check within 2 absolute value I think

 }