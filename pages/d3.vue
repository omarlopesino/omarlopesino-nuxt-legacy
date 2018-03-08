<template>
  <div>  
    <svg id="d3-container" width="2000" height="500">

      <clipPath id="clipCircle">
        <circle r="120" cx="170" cy="140"></circle>
      </clipPath>
    <g>
      <image id="face" x="0" y="20" width="300" height="300" xlink:href="https://api.omarlopesino.me/sites/default/files/2018-02/me.jpeg" clip-path="url(#clipCircle)">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 60 70"
          to="360 60 70"
          :dur="secs"
          repeatCount="indefinite"/>
      </image>
          <animateTransform attributeName="transform" 
            attributeType="XML"
            type="translate" 
            values ="0 20;800 20;0 20"
            dur="10"
            repeatCount="indefinite"/>
      </g>
    </svg>
  </div>
</template>

<script>
  import * as d3 from "d3";
  const ROTATION_DISABLED = '0s';
  const ROTATION_ENABLED = '1s';
  export default {
    data() {
      return {
        rotate: false
      }
    },
    methods:  {
      enableRotation() {
        this.rotate = true;
      }
    },
    computed: {
      secs() {
        return this.rotate ? ROTATION_ENABLED : ROTATION_DISABLED;
      }
    }
  }
</script> 
