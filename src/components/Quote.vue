<template>
    <div class="panel panel-default">
        <div class="panel-body">
            {{ quote.content }}



        </div>
        <div class="panel-footer">
            <div v-if="editing">
                <input type="text" v-model="editValue">
                <a @click="onUpdate">Update</a>
                <a @click="onCancel">Cancel</a>
            </div>
            <div v-else>
                <a @click="onEdit">Edit</a>
                <a @click="onDelete">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        props: ['quote'],
        data() {
            return {
                editing: false,
                editValue: this.quote.content
            }
        },
        methods: {
            onEdit() {
                this.editing = true
                this.editValue = this.quote.content
            },
            onCancel() {
                this.editing = false
            },
            onDelete() {
                const token = localStorage.getItem('token')
                this.$emit('quoteDeleted', this.quote.id)
                axios.delete('http://192.168.10.10/api/quote/' + this.quote.id + '?token=' + token)
                    .then(
                        (response) => console.log(response)
                    ).catch(
                    (error) => console.log(error)
                )
            },
            onUpdate() {
                const token = localStorage.getItem('token')
                this.editing = false
                this.quote.content = this.editValue
                axios.put('http://192.168.10.10/api/quote/' + this.quote.id + '?token=' + token,
                    {
                        content: this.editValue
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

<style scoped>
    a {
        cursor: pointer;
    }
</style>