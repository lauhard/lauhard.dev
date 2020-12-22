<script>
    export let content;
</script>

<svelte:head>

</svelte:head>

<span>{content}</span>

<style>
    span {
        padding: 0;
        margin:0;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }
    span:after {    
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: #a248f7e3;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	span:hover:after { 
		width: 100%; 
		left: 0; 
	}
</style>