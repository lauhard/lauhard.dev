<!-- script -->
<script>
    export let post = {};
    export let heroOverlayProps = {};
    export let backgroundColor;
    export let color;
    $: post = post;

    leave();

    function enter() {
        if (typeof(heroOverlayProps.backgroundColorOnHover) == 'undefined')
            backgroundColor = "red";
        else
            backgroundColor = heroOverlayProps.backgroundColorOnHover;

        if (typeof(heroOverlayProps.colorOnHover) == 'undefined')
            color = "black";
        else
            color = heroOverlayProps.colorOnHover
	}

	function leave() {
        if (typeof(heroOverlayProps.backgroundColor) == 'undefined')
            backgroundColor = "red";
        else
            backgroundColor = heroOverlayProps.backgroundColor;

        if (typeof(heroOverlayProps.color) == 'undefined')
            color = "black";
        else
            color = heroOverlayProps.color
	}

</script>
<!-- html -->
<svelte:head>
    <!-- head content -->
</svelte:head>
    <div class="hero-overlay" on:mouseover={enter} on:mouseout={leave} style="color: {color}; background: {backgroundColor}" >
        {#if typeof(post.title) != 'undefined' && post.title != ''}
            <h1>{post.title}</h1>
        {/if}

        {#if typeof(post.author) != 'undefined' && post.author != ''}
            <p>by <strong>{post.author}</strong></p><br>
        {/if}

        {#if typeof(post.creationDate) != 'undefined' && post.creationDate != ''}
            <span>📅 <strong>{post.creationDate}</strong></span><br>
        {/if}

        {#if typeof(post.modificationDate) != 'undefined' && post.modificationDate != ''}
            <span>✏️ {post.modificationDate}</span><br>
        {/if}

        {#if typeof(post.readingTime) != 'undefined' && post.readingTime != ''}
            <span>🕝 <strong>~{post.readingTime} min.</strong></span>
        {/if}

        <div style="margin-top:5px;">
            <slot></slot>
        </div>
    </div>


<!-- css -->
<style>
    .hero-overlay {
        height: auto;
        min-width: 70%;
        word-break: break-all;
        position: absolute;
        bottom:0;
        width: auto;
        padding: 1em;
        transition: width ease .3s;
        border-radius: 0 10px 0px 0px;

    }
    .hero-overlay:hover {
        transition: all ease-in-out .3s;
    }
    p, h1 {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }
    h1 {
        font-weight: bold;
    }
    @media (max-width: 700px) {
		.hero-overlay {
            width: 100%;
            border-radius: 0 10px 0px 0px;
        }
    }
    @media (max-width: 400px) {
		.hero-overlay {
            font-size: 10pt;
            width: 100%;
            padding: 1em;
            margin-top: -163px;
            border-radius: 0 10px 0px 0px;
        }
	}
</style>