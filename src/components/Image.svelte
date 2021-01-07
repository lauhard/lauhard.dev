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
        <!-- image overlay -->
        <slot></slot>
        <!-- image overlay -->
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
@media (max-width: 600px) {
    figcaption{
        width: 399px  !important;
    }
    img {
        width: 399px !important;
        height: auto;
    }
}

@media (max-width: 400px) {
    figcaption{
        width: 299px  !important;
    }
    img {
        width: 299px !important;
        height: auto;
    }
}
</style>
<!-- style -->
