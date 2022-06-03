<template>
    <div>
        <h1>counter: mapMutations(commit)</h1>
        <input type="button" v-on:click="onclick_commit(-2)" value="-" />
        <p>{{count}} / {{ ceiling }}</p>
        <input type="button" v-on:click="onclick_commit(+4)" value="+" />
        <h1>counter: mapActions(dispatch)</h1>
        <input type="button" v-on:click="onclick_dispatch(-10)" value="-" />
        <p>{{count}} / {{ ceiling }}</p>
        <input type="button" v-on:click="onclick_dispatch(+10)" value="+" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['count']),
        ...mapGetters(['ceiling'])
    },
    methods: {
        ...mapMutations(['update']),
        onclick_commit(step) {
            this.update({step});
            // this.$store.commit('update', {step});
        },
        ...mapActions(['asyncUpdate']),
        onclick_dispatch(step) {
            this.asyncUpdate({step});
            // this.$store.dispatch('asyncUpdate', {step});
        },
    },
}
</script>
