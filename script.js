document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navLink')
    const dropdownMenu = document.querySelector('.dropdown-menu')

    let currentMenu = null
    let currentNavLink = null

    navLinks.forEach(navLink => {
        navLink.addEventListener('mouseover', (e) => {
            const menuId = e.target.getAttribute("data-menu")

            const menuContent = document.getElementById(menuId)

            if(currentMenu !== menuContent) {
                dropdownMenu.style.display = "flex"

                if(currentMenu) {
                    currentMenu.classList.remove('active')
                }

                menuContent.classList.add('active')
                menuContent.style.opacity = "0"

                currentMenu = menuContent
            }
            if(currentNavLink !== e.target) {
                const targetNavLinkRect = e.target.getBoundingClientRect()

                const menuRect = menuContent.getBoundingClientRect()

                dropdownMenu.style.width = `${menuRect.width}px`
                dropdownMenu.style.height = `${menuRect.height}px`

                dropdownMenu.style.transform = `translateX(${targetNavLinkRect.left}px)`

                dropdownMenu.style.top = `${targetNavLinkRect.bottom}px`;
                dropdownMenu.style.opacity = "1"
                menuContent.style.opacity = "1"

                currentNavLink = e.target

            }

                
        })
    })

    document.querySelector('header').addEventListener('mouseleave', () =>{
        dropdownMenu.style.opacity = '0'
        setTimeout(() => {
            dropdownMenu.style.display = 'none'
            if(currentMenu){
                currentMenu.classList.remove('active')
            }
            currentMenu = null
            currentNavLink = null
        }, 300)
    })
})