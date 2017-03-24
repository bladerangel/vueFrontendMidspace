<template>
    <form @submit.prevent="onSubmitted">
        <div class="from-group">
            <label for="content">Content</label>
            <input
                    id="content"
                    type="text"
                    class="form-control"
                    v-model="quoteContent"/>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                quoteContent: ''
            }
        },
        methods: {
            onSubmitted() {
                const token = localStorage.getItem('token')
                axios.post('http://192.168.10.10/api/quote?token=' + token,
                    {
                        content: this.quoteContent
                    }
                ).then(
                    (response) => console.log(response)
                ).catch(
                    (error) => console.log(error)
                )
            }
        }
    }
</script>