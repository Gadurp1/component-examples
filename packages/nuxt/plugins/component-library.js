import { PageComponents } from '@newmont/components'
import Vue from 'vue'

Object.keys(PageComponents).forEach((block) => {
    Vue.component(block, PageComponents[block])
})
