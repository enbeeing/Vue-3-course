const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {
                    title: 'Book Title', 
                    author: 'Author Name', 
                    img: 'assets/1.jpg', 
                    isFav: true
                },
                {
                    title: 'Book Title 2', 
                    author: 'Author Name 2', 
                    img: 'assets/2.jpg', 
                    isFav: false
                },
                {
                    title: 'Book Title 3', 
                    author: 'Author Name 3', 
                    img: 'assets/3.jpg', 
                    isFav: true
                }
            ],
            x: 0,
            y: 0
        }
    }, 
    methods: {
        toogleFav(book){
            // how to target specifik book?
            book.isFav = !book.isFav
        },
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        }
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data){
        //         console.log(data);
        //     }
        // },
        // handleMousemove(e){
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
