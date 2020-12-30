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
            backgroundColor =  "red";
        if (typeof(heroOverlayProps.colorOnHover) == 'undefined')
            color = "black";
	}

	function leave() {
        if (typeof(heroOverlayProps.backgroundColorOnHover) == 'undefined')
            backgroundColor = "black";
        if (typeof(heroOverlayProps.colorOnHover) == 'undefined')
		    color = "red";
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
        position: absolute;
        padding: 1em;
        margin-bottom: 20px;
        border-radius: 0 10px 0 20px;
        width: 70%;
        bottom: 0px;
        margin: 0;
        height: auto;
        transition: all ease-in-out .8s;
    }
    .hero-overlay:hover {
        
        transition: all ease-in-out .8s;
    }
    p, h1 {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }
    h1 {
        font-weight: bold;
    }
    @media (max-width: 1360px) {
		.hero-overlay {
            width: 100%;
            border-radius: 0 10px 20px 20px;
        }
	}
</style>