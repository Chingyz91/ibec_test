<template>
<div id="map" class="smallMap">
  <yandex-map 
    :coords="coords3"
    :zoom="13" 
    
    @click="onClick"
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="123"
      :balloon-template="balloonTemplate" 
      hint-content="«Mega Park Алматы»." 
    />

    <ymap-marker 
      :coords="coords2" 
      marker-id="124" 
      hint-content="«БЦ НурлыТау»."
      :icon="markerIcon"
    />
  </yandex-map>
</div> 
</template>

<script>

</script>

<style scoped>
#map {
  width: 100%;
  max-width: 768px;
  height: 100vh;
  max-height: 600px;
}

.ymap-container {
  height: 100%;
}

.red {
  color: red;
}
</style>