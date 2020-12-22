<!-- script -->
<script>
    export let imageName;
    export let alt;
    export let desc;
</script>
<!-- script -->

<!-- html -->
<svelte:head>

</svelte:head>
<figure >
    <img src="./images/{imageName}" alt="{alt}">
    <figcaption>{desc}</figcaption>
</figure>
<!-- html -->

<!-- style -->
<style>
figure img{
    width:100%;
    object-fit: cover;
}

figcaption{
    margin-top: -20px;
    padding: 0;
}
</style>
<!-- style -->
