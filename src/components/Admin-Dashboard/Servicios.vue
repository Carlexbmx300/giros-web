<template>
    <div class="servicios">
        <mdb-pagination circle>
    <mdb-page-item disabled>Previous</mdb-page-item>
    <mdb-page-nav prev disabled></mdb-page-nav>
    <mdb-page-item>1</mdb-page-item>
    <mdb-page-item>2</mdb-page-item>
    <mdb-page-item>3</mdb-page-item>
    <mdb-page-nav next></mdb-page-nav>
    <mdb-page-item>Last</mdb-page-item>
  </mdb-pagination>
    </div>
</template>
<script>
import { mdbPagination, mdbPageItem, mdbPageNav } from 'mdbvue';
  export default {
    name: 'PageLoader',
    components: {
      mdbPagination,
      mdbPageItem,
      mdbPageNav
    }
  }
</script>