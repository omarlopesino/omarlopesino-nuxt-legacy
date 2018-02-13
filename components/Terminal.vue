<template>
  <div class="terminal-wrapper" v-on:click="inputFocus">
    <div class="data">
      <div class="data-wrapper">
        <ul class="output">
          <li class="terminal-output" v-for="(element, index) in stack" v-bind:key="index" v-html="element"></li>
        </ul>
        <div class="user-input">
          <label class="command-helper">></label>
          <input ref='input' type="textfield" class="form-item command" v-model="input" v-on:keyup.enter="processResponse" autofocus>
        </div>
      </div>
    </div>
    <div class="terminal">
      <div class="tabs">
        <span class="tab tab__title">Ask me anything!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lastInput: "",
      input: "",
      // Stack of input / output made on the terminal.
      stack: [],
      // Commands insert.
      commands: [],
      processing: false,
      autofocus: "",
      currentCommand: 0
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async processResponse() {
      this.processing = true;
      this.storeInput();
      this.input = '';
      await this.sleep(100);
      this.processInput();
    },
    stopProcessing() {
      this.processing = false;
    },
    // Store input where neccesary.
    storeInput() {
      var input = this.getInput();
      this.setLastInput(input);
      this.addToStack('> ' + input);
      this.addToCommands(input);
    },
    // Process input.
    processInput() {
      // @TODO: get response from API AI!
      this.stack.push('Lorem ipsum');
      this.stopProcessing();
    },
    addToStack(message) {
      this.stack.push(message);
    },
    addToCommands(input) {
      this.commands.push(input);
      // Set current command.
      this.currentCommand = this.commands.length;
    },
    getInput() {
      return this.input;
    },
    inputFocus() {
      console.log(this.$refs.input);
      this.$refs.input.focus();
      console.log('FOCUS');
    },
    setLastInput(input) {
      this.lastInput = input;
    }
  }
}
</script>

<style lang="scss">
  .terminal-wrapper {
    border-radius: 1em;
    /*Theme output / input layer.*/
    .data {
      color: white;
      position: relative;
      top: 2.0em;
      outline-width: 0;
      z-index: 2;
      /* theme output response.*/
      .output {
        .terminal-output {
          position: relative;
          left: 1em;
          margin-top: -6px;
          color: white;
          font-weight: bold;
          font-family: 'Ubuntu Mono';
        }
      }
      .data-wrapper {
      max-height: 18em;
      overflow: hidden;
          position: absolute;
      }
      .command-helper {
        margin: 0em 1em 0em 1em;
        font-weight: bold;
        color: white;
      }
      .form-item {
        padding: 0em;
        height: 2em;
        font-size: 1em;
        font-family: 'Inconsolata', monospace;
        background-color: black;
        color: white;
        font-weight: bold;
        border: none;
        vertical-align: bottom;
        position: relative;
        top: .25em;
        &:focus {
            outline-width: 0;
        }
      }
    }
    .terminal {
      width: 30em;
      height: 20em;
      background-color: black;
      .tabs {
        margin-top: .1em;
        background-color: lightgray;
        font-family: 'Roboto Mono', monospace;
        .tab.tab__title {
          font-size: 15px;
          color: black;
          background-color: white;
          padding: 0em 8em;
          border: .1em solid black;
          border-radius: 1em 1em 0em 0em;
        }
      }
    }
  }
</style>
