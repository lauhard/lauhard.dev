<!-- script -->
<script>
    export let alt;
    export let desc;
    export let imageProps;
    export let imageName;
</script>
<!-- script -->

<!-- html -->
<svelte:head>

</svelte:head>
<figure >
    <img style="width:{imageProps.width}; height:{imageProps.height}; border-radius:{imageProps.borderRadius}; object-fit:{imageProps.objectFit};" src="./images/{imageName}" alt="{alt}">
    <figcaption style="width:{imageProps.width};">{desc}</figcaption>
</figure>
<!-- html -->

<!-- style -->
<style>
figure, img, figcaption{
    margin:0;
    width: 100%;
}
figure{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
figcaption{
    font-size: .9rem;
    display: block;
    text-align: left;
    font-style: oblique;
    height: auto;
}
</style>
<!-- style -->
