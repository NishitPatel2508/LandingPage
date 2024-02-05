const header = document.querySelector("header")
console.log(header)
const ft = document.querySelector(".fixed-top")
console.log(ft)
const sectionOne = document.querySelector(".bgimg")
console.log(sectionOne)
const navitems = document.querySelectorAll(".nav-item a")
console.log(navitems)
const sectionOneOptions = {
    rootMargin:"-630px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(
    function(entries,sectionOneObserver){
        entries.forEach((entry) => {
            if(!entry.isIntersecting){
                ft.classList.add("fixed-top")
                ft.classList.add("navbg")
                
                for (let i = 0; i < navitems.length; i++) {
                    navitems[i].style.color = "white";
                }
            }
            else{
                ft.classList.remove("fixed-top")
                ft.classList.add("navbg")
                ft.classList.remove("navbg")

                for (let i = 0; i < navitems.length; i++) {
                    navitems[i].style.color = "black";
                }
            }
        })
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne)

