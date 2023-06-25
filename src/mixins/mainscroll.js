export default function (refval) {
    return {
        mounted() {
            this.$bus.$on("setmainscroll", this.handsetmainscroll);
            this.$refs[refval].addEventListener("scroll", this.hscroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainscroll");
            this.$bus.$off("setmainscroll", this.handsetmainscroll);
            this.$refs[refval].removeEventListener("scroll", this.hscroll);
        },
        methods: {
            handsetmainscroll(scrollTop) {
                this.$refs[refval].scrollTop = scrollTop;
            },
            hscroll() {
                this.$bus.$emit("mainscroll", this.$refs[refval]);
            }
        },
    }
}