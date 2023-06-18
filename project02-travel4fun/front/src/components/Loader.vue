<template>
    <div class="loader-mask">
        <div class="loader-wrapper">
            <div class="loader-content">
                <span class="loader"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loader-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.loader-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.loader-content {    
    margin: 0px auto;        
    transition: all 0.3s ease;
    height: 50px;
    width: 50px;
}

.loader {
    height: 100%;
    width: 100%;
}
</style>