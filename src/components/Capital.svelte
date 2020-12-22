<script>
    export let char
    export let size
    export let color
    export let content

</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">
</svelte:head>

<p>
    <span class="char" style="color: {color}; font-size: {size}; ">{char} </span>
    <span class="content" style = "line-height: calc({size} - 0); margin: calc({size} * -.3) 0 0 10px">{content}</span>
</p>

<style>
    p{
        padding: 0;
    }
    .char{
        font-family: 'Homemade Apple', cursive;
        margin: 0;
        padding: 0;
        line-height: 0;
    }
    .content{
       display: inline-block;
       font-style: oblique;
       color: #9733f5;
       position: absolute;
    }
</style>

