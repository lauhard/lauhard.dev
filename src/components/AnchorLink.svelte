<!-- script -->
<script>
    import Underscore from "./Underscore.svelte";
    import Capital from "./Capital.svelte";

    export let slug;
    export let _enum = "";
    export let id;
    // export let anchorProps;
    export let margin;
    export let idSlug = slugify(id);

    function slugify(id) {
        return id.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }
</script>
<!-- script -->

<!-- html -->
<svelte:head>

</svelte:head>
<a class ="anchor" href="/blog/{slug}/#{idSlug}">
    <span class="capital" style="margin:{margin};">
        <!-- <Capital char = "{_enum}" content = "" capitalProps = "{anchorProps}" /> -->
        {_enum}
    </span>
    <Underscore content="{id}"/>
</a>
<!-- html -->

<!-- style -->
<style>
a {
    text-decoration:none;
    height:25px;
}
.anchor {
    display:flex;
    flex-direction:row;
    align-items:center;
}
/* .capital {
    margin-top: 12px;
} */
</style>
<!-- css -->