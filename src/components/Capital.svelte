<script>
    export let char
    export let content = ""
    export let capitalProps

</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">
</svelte:head>

<p>
    <span class="char" style="color: {capitalProps.color}; font-size: {capitalProps.size}; font-family: {capitalProps.font}">{char} </span>
    <span class="content" style = "color: {capitalProps.color}; margin: calc({capitalProps.size} * -.3) 0 0 10px">{content}</span>
</p>

<style>
    p{
        padding: 0;
        display: inline-block;
        width: auto;
    }
    .char{
        margin: 0;
        padding: 0;
        line-height: 0;
    }
    .content{
       display: inline-block;
       font-style: oblique;
       /* color: var(--main-color); */
       position: absolute;
    }
</style>

