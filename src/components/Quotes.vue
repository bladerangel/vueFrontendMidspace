<template>
    <div>
        <button class="btn btn-primary" @click="onGetQuotes">Get Quotes</button>
        <hr>
        <app-quote
                v-for="quote in quotes"
                :quote="quote"
                @quoteDeleted="onQuoteDeleted($event)"></app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'
    import axios from 'axios'

    export default {
        data() {
            return {
                quotes: []
            }
        },
        methods: {
            onGetQuotes() {
                const token = localStorage.getItem('token')
                axios.get('http://192.168.10.10/api/quotes?token=' + token)
                    .then(
                        (response) => this.quotes = response.data.quotes
                    ).catch(
                    (error) => console.log(error)
                )
            },
            onQuoteDeleted(id) {
                const position = this.quotes.findIndex((element) => element.id == id)
                this.quotes.splice(position, 1)
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>