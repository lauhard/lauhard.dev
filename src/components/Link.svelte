<!-- script -->
<script>
    import utils from '../helper/utils';
    export let href = "";
    export let _enum = "";
    export let id = "";
    export let margin = "0";
    export let slugID = false;
    export let target = "";
    export let idSlug ="";

    if (slugID) {
        idSlug = utils.slugify(id);
    }

</script>
<!-- script -->

<!-- html -->
<svelte:head>

</svelte:head>
<a class ="anchor" href="{href}{idSlug}" target="{target}">
    <span style="margin:{margin};">
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