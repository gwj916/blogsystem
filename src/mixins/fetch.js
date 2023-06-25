export default function (defaultvalue = null) {
    return {
        data() {
            return {
                isloding: true,
                data:defaultvalue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isloding = false
        },
    }

}