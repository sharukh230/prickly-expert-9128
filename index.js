let productList = [
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY",
        name: "R + F Lash Boost",
        desc: "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes.",
        price: "$155",
        rating: "4.6 (7986)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        name: "Total RF Serum",
        desc: "Our most comprehensive anti-aging serum to revitalize and address all key signs of aging.",
        price: "$175",
        rating: "4.5 (3374)",
        blueimg: "https://www.rodanandfields.com/en-us/medias/PS20-PopsugarPick-Seal-Navy-2020-160x160.png?context=bWFzdGVyfGltYWdlc3w5MjEyfGltYWdlL3BuZ3xpbWFnZXMvaDI5L2gwNC8xNDI5NTk0MTY3NzA4Ni5wbmd8NDNhNTkyMzRkYjcxNDI4YTI5MTU0ZmZkNzRhZTQ1NDY0YjJlZWFiMzNhNjA5NDMxMWJhYWU1MjIxNTY2ZDEzOQ",
        redimg: "https://www.rodanandfields.com/en-us/medias/Rodan-Fields-New-Beauty-Award-2022-160.png?context=bWFzdGVyfGltYWdlc3w4NzQ1fGltYWdlL3BuZ3xpbWFnZXMvaGUwL2g1NC8xNDkzMDM4MTg2NDk5MC5wbmd8MWUyMGY4NGE2MGYwZWY1OTBkODY1ZWMwYTgwMGJlNWIzYTUzMTcyNDVkMjE3N2FmODg3YTMyZmJlODcwYjYzOA",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        name: "REDEFINE Regimen",
        desc: "Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles. ",
        price: "$220",
        rating: "4.7 (7309)",
        blueimg: "https://www.rodanandfields.com/en-us/medias/PS20-PopsugarPick-Seal-Navy-2020-160x160.png?context=bWFzdGVyfGltYWdlc3w5MjEyfGltYWdlL3BuZ3xpbWFnZXMvaDI5L2gwNC8xNDI5NTk0MTY3NzA4Ni5wbmd8NDNhNTkyMzRkYjcxNDI4YTI5MTU0ZmZkNzRhZTQ1NDY0YjJlZWFiMzNhNjA5NDMxMWJhYWU1MjIxNTY2ZDEzOQ",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        name: "REDEFINE Multi-Function Eye Cream",
        desc: "Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet. ",
        price: "$70",
        rating: "4.6 (9449)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2hkMS9oM2MvMTQ1MzIxNjY2MTUwNzAucG5nfGZlMDQ0NDRlMjczNDFlZjdkYWVmNjkwZWY4MDAwM2I4MjMwZGZiMzU3ZTViZGNlYjllNzBiZjAwY2FlZDU5NzA",
        name: "R + F Active Hydration Serum",
        desc: "Instantly boosts hydration levels by 200% and locks in moisture on skin's surface. ",
        price: "$112",
        rating: "4.8 (8795)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/ENHEY15-720x600-DESKTOP-v4.jpg?context=bWFzdGVyfGltYWdlc3w2MDYyOXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGI2LzEzNTMzMTczODc0NzE4LmpwZ3w0MGI1MmM0OTExMmRiMzUzYzg5YTIyNWJjZTdiOTZkNzk1ZTVmOTk2MTBhY2IzZTcwNzhkZDI4NTUxZDI5Zjhh",
        name: "Active Hydration Bright Eye Complex",
        desc: "Reduces visible dark circles and under-eye puffiness over time for younger-looking eyes. ",
        price: "$155",
        rating: "4.5 (5901)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5",
        name: "Rodan + Fields Active Hydration Body Replenish",
        desc: "Instantly and continuously hydrates the body for younger-looking, younger-acting skin. ",
        price: "$66",
        rating: "4.9 (7128)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/ENPS125-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODU1NXxpbWFnZS9wbmd8aW1hZ2VzL2gyNi9oZjgvMTQ1MzIxNjc2MzA4NzgucG5nfGM0YTc0NjM0YWIzM2QxZDZlOTc0NTdmYjA4M2EyNDA5NGJhODg3ZDQwMGJjZjdiMTZlYTI2MjYwNjI2Y2JhZGE",
        name: "Rodan + Fields Enhancements Micro-Dermabrasion Paste",
        desc: "Exfoliates away dead skin cells for smoother, vibrant-looking skin after just one use. ",
        price: "$83",
        rating: "4.8 (4344)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        name: "REVERSE Regimen",
        desc: "Brightens + refines skin’s surface while tackling the look of fine lines + dark spots. ",
        price: "$195",
        rating: "4 (1792)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
        name: "UNBLEMISH Regimen",
        desc: "Helps clear and prevent adult acne while visibly minimizing pores + fine lines.",
        price: "$190",
        rating: "4.4 (463)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
        name: "SOOTHE Regimen",
        desc: "Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier. ",
        price: "$185",
        rating: "4.3 (672)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        name: "RECHARGE Regimen",
        desc: "Defends against lifestyle stressors that leave skin looking dull, blotchy + dehydrated. ",
        price: "$134",
        rating: "4.6 (722)",
    },
    {
        image_url: "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
        name: "SPOTLESS Regimen",
        desc: "For teens + young adults: Clears existing blemishes + prevents new ones from forming.",
        price: "$89",
        rating: "4.6 (1576)",
    },
]



productList.forEach(function (elem) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.image_url
    let name = document.createElement("h4");
    name.innerText = elem.name;
    let desc = document.createElement("p");
    desc.innerText = elem.desc;
    desc.style.fontSize = "15px"
    let price = document.createElement("p");
    price.innerText = elem.price;

    let rating = document.createElement("p");
    rating.innerText = elem.rating;


    let btn = document.createElement("button");
    btn.innerText = "ADD TO BAG"

    document.querySelector("#container").append(div)
    div.append(image, name, desc, price, rating, btn);

})

// document.getElementById("signinbtn").addEventListener("click", function () {

//     document.getElementById("signInpop").style.display = "block";
// })
// document.getElementById("signupbtn").addEventListener("click", function () {

//     document.getElementById("signUpPop").style.display = "block";
// })
