<!-- script -->
<script>
    export let href = "";
    export let _enum = "";
    export let id = "";
    // export let anchorProps;
    export let margin = "0";
    export let slugID = false;
    export let target = "";
    export let idSlug ="";

    if (slugID) {
        idSlug = slugify(id)
    }
    function slugify(id) {
        return "/#" + id.toString().toLowerCase()
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
<a class ="anchor" href="{href}{idSlug}" target="{target}">
    <span style="margin:{margin};">
        <!-- <Capital char = "{_enum}" content = "" capitalProps = "{anchorProps}" /> -->
        {_enum}
    </span>
    
    {id}
</a>
<!-- html -->

<!-- style -->
<style>
a {
    text-decoration:none;
    display:inline-block;
    height:auto;
    width: auto;
}
</style>
<!-- css -->