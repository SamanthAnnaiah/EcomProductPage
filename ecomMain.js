import { images_location, images_extension, yourCart } from "/ecomMainLib.js";

let main_img = "";
let prev_main_img = "";
let shopCart_top = 0;
let shopCart_right = 0;
let nitems_num = 0;
let cur_index = 0; 
let product_images = "";
let modal_count = 0; 

let main_div = document.querySelector(".main_div");
let tnailListener = document.querySelector(".second_set2");
let mainimageListener = document.querySelector(".second_set1"); 
let minusitems = document.getElementById("minusitems");
let plusitems = document.getElementById("plusitems"); 
let nitems = document.getElementById("nitems"); 
let shopCart = document.getElementById("shopCart");
let scart = document.getElementById("scart");
let itemname = document.getElementById("itemname"); 
let actual_cost = document.getElementById("actual_cost");
let orig_cost = document.getElementById("orig_cost"); 
let cwindow = document.querySelector(".cartwindow");
let cart_delete = document.querySelector(".cart_delete"); 
let checkout = document.getElementById("checkout");
let pimg = document.getElementById("pimg");
let modal_window = document.querySelector(".modal_window");
let nextone = document.getElementById("iconNext");
let prevone = document.getElementById("iconPrevious");
let modal_close = document.getElementById("modal_close"); 


tnailListener.addEventListener("click", tnailsDisplayer);
minusitems.addEventListener("click", itemsVariator);
plusitems.addEventListener("click", itemsVariator);
scart.addEventListener("click", scarter);
cart_delete.addEventListener("click", cartDeleter); 
pimg.addEventListener("click", modaler);
nextone.addEventListener("click", nextprev); 
prevone.addEventListener("click", nextprev); 
modal_close.addEventListener("click", modalCloser);

getshopCart();
loadImages();

function getshopCart() {
    let shopCartRect = shopCart.getBoundingClientRect();
    shopCart_top = shopCartRect.top + 60;
    shopCart_right = shopCartRect.right;
    cwindow.classList.add("display_none");
    modal_window.classList.add("display_none"); 
    cwindow.style.position = "fixed";
    cwindow.style.top = shopCart_top + "px"; 
    cwindow.style.right = 69 + "px";
}

function loadImages() {
    let tnails_hcols = tnailListener.children;
    let tnails = [];
    let fnails = [];
    for (let i = 0; i < tnails_hcols.length; i++) {
        tnails_hcols[i].dataset.index = i;
        let temp1 = tnails_hcols[i].getAttribute("src");
        tnails.push(temp1); 
        fnails.push(mainImageName(temp1));
    }
}

function mainImageName(timg) {
    let t1 = timg.lastIndexOf("/");
    let t2 = timg.lastIndexOf(".");
    let m_img = "";
    m_img = `${images_location}${timg.substring(t1 + 1, (t2 - 10))}${images_extension}`;
    return m_img; 
}

function tnailsDisplayer(event) {
    let tnail_cur = event.target;
    tnail_cur.classList.add("reduce_opacity"); 
    if (prev_main_img && (prev_main_img != tnail_cur)) {
        prev_main_img.classList.remove("reduce_opacity");
        prev_main_img = tnail_cur;
    } else {
        if (prev_main_img.length <= 0) {
            tnailListener.children[0].classList.remove("reduce_opacity"); 
        }
        prev_main_img = tnail_cur;
    }
    cur_index = Number.parseInt(tnail_cur.dataset.index);
    let tnail_cur_img = (tnail_cur.getAttribute("src")).toString();
    let t1 = tnail_cur_img.lastIndexOf("/");
    let t2 = tnail_cur_img.lastIndexOf(".");
    main_img = "";
    main_img = `${images_location}${tnail_cur_img.substring(t1 + 1, (t2 - 10))}${images_extension}`;
    let mainimage = mainimageListener.children[0];
    mainimage.setAttribute("src", main_img);
}

function mnailsDisplayer(event) {
    let tnail_cur = event.target;
    tnail_cur.classList.add("reduce_opacity"); 
    if (prev_main_img && (prev_main_img != tnail_cur)) {
        prev_main_img.classList.remove("reduce_opacity");
        prev_main_img = tnail_cur;
    } else {
        if (prev_main_img.length <= 0) {
            tnailListener.children[0].classList.remove("reduce_opacity"); 
        }
        prev_main_img = tnail_cur;
    }
    cur_index = Number.parseInt(tnail_cur.dataset.index);
    let tnail_cur_img = (tnail_cur.getAttribute("src")).toString();
    let t1 = tnail_cur_img.lastIndexOf("/");
    let t2 = tnail_cur_img.lastIndexOf(".");
    main_img = "";
    main_img = `${images_location}${tnail_cur_img.substring(t1 + 1, (t2 - 10))}${images_extension}`;
    let subimageListener = document.querySelector(".modal_window .second_set1");
    let mainimage = subimageListener.children[0];
    mainimage.setAttribute("src", main_img);
}

function knailsDisplayer(target) {
    let tnail_cur = target;
    tnail_cur.classList.add("reduce_opacity"); 
    if (prev_main_img && (prev_main_img != tnail_cur)) {
        prev_main_img.classList.remove("reduce_opacity");
        prev_main_img = tnail_cur;
    } else {
        if (prev_main_img.length <= 0) {
            tnailListener.children[0].classList.remove("reduce_opacity"); 
        }
        prev_main_img = tnail_cur;
    }
    cur_index = Number.parseInt(tnail_cur.dataset.index);
    let tnail_cur_img = (tnail_cur.getAttribute("src")).toString();
    let t1 = tnail_cur_img.lastIndexOf("/");
    let t2 = tnail_cur_img.lastIndexOf(".");
    main_img = "";
    main_img = `${images_location}${tnail_cur_img.substring(t1 + 1, (t2 - 10))}${images_extension}`;
    let subimageListener = document.querySelector(".modal_window .second_set1");
    let mainimage = subimageListener.children[0];
    mainimage.setAttribute("src", main_img);
}

function itemsVariator(event) {
    let ivariant = event.target;
    nitems_num = Number.parseInt(nitems.textContent);
    if (ivariant.dataset.mp == "minus") {
        if (nitems_num <=0) {
            nitems_num = 0;
        }
        else {
            nitems_num--;   
        }
    } else {
        nitems_num++;
    }
    nitems.textContent = nitems_num;
}

function scarter() {
    let mes = " ";
    if (nitems_num != 0) {
        const mycart = new yourCart((itemname.textContent).trim(), nitems_num, (Number.parseInt(actual_cost.textContent) * nitems_num), (Number.parseInt(orig_cost.textContent) * nitems_num)); 
        
        let iname = document.querySelector(".iname");
        iname.textContent = mycart.cart_name;

        let aprice = document.querySelector(".aprice");
        aprice.textContent = `${nitems_num} * ${(actual_cost.textContent).trim()} = ${mycart.cart_cost} $`

        let savings = mycart.cart_cost_orig - mycart.cart_cost;
        document.querySelector(".savings").textContent = `Orig Price ${mycart.cart_cost_orig} $ Savings of ${savings} $`;

        cwindow.classList.add("display_flex");
        checkout.classList.remove("display_none");
        checkout.classList.add("cartadd");
        cwindow.classList.remove("display_none");
    } else {
        mes = "Your cart is empty";
        let iname = document.querySelector(".iname");
        iname.textContent = mes;

        let aprice = document.querySelector(".aprice");
        aprice.textContent = `0 $`

        document.querySelector(".savings").textContent = ` `;

        cwindow.classList.add("display_flex");
        cwindow.classList.remove("display_none");
        checkout.classList.add("display_none");
        checkout.classList.remove("cartadd");
    }
}

function cartDeleter() {
   cwindow.classList.add("display_none");
   cwindow.classList.remove("display_flex");    
}

function modaler(params) {
    modal_count++;
    if (modal_count == 1) {
        let second_set = document.querySelector(".second_set");
        let modal_set = second_set.cloneNode(true); 
        modal_set.addEventListener("click", mnailsDisplayer); 
        modal_window.appendChild(modal_set);
    } else {
        let second_set = document.querySelector(".second_set");
        let modal_second_set = document.querySelector("div.modal_window div.second_set");
        modal_second_set.innerHTML = "";
        modal_window.removeChild(modal_second_set);
        modal_second_set = second_set.cloneNode(true); 
        modal_second_set.addEventListener("click", mnailsDisplayer); 
        modal_window.appendChild(modal_second_set);
    }
    product_images = document.querySelector(".modal_window .second_set2").children;
    console.log(product_images);
    main_div.classList.add("reduce_filter"); 
    modal_window.classList.add("display_block");
}

function nextprev(event) {
    if (event.target.id == "iconNext") {
        if (product_images.length > (cur_index + 1)) {
            cur_index++;
            knailsDisplayer(product_images[cur_index]);
        }

    }
    else {
        if ((cur_index - 1) >= 0) {
            cur_index--;
            knailsDisplayer(product_images[cur_index]);
        }
    }
}

function modalCloser() {
    main_div.classList.remove("reduce_filter"); 
    modal_window.classList.remove("display_block");
}