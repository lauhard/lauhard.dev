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
<figure style="align-items:{imageProps.position}; width:{imageProps.figureWith};">
    <img style="width:{imageProps.width}; height:{imageProps.height}; border-radius:{imageProps.borderRadius}; object-fit:{imageProps.objectFit};" src="./images/{imageName}" alt="{alt}">
    <div>
        <slot></slot>
    </div>
    <figcaption style="max-width:{imageProps.width};">{desc}</figcaption>
</figure>
<!-- html -->

<!-- style -->
<style>

figure, img, figcaption{
    margin:0;
    
}
figure{
    height: auto;
    display: flex;
    flex-direction: column;
    /* align-items: center;*/
    justify-content: center; 
}
figcaption{
    font-size: .9rem;
    display: block;
    text-align: left;
    font-style: oblique;
    height: auto;
    width: 100%;
}
</style>
<!-- style -->
