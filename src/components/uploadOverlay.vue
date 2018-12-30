<template>
    <div class="upload-overlay">
        hello
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'UploadOverlay'
    }
</script>


<style scoped>
    .upload-overlay {
        background-color: rgba(40, 40, 40, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: var(--nav-height);
        z-index: 4;
    }
</style>
