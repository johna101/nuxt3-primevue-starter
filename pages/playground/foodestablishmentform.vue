<template>
  <div class="card">
    <FormKit
      type="form"
      #default="{value}">
      <div class="grid grid-cols-1 gap-x-6">
        <FormKit
          type="primeInputText"
          name="name"
          label="Name"/>
        <FormKit
          type="primeCalendar"
          name="date"
          label="Appointment date"
          placeholder="Select a date"
          help="Select a date sssto book your appointment."
          :show-icon="true"
        />
        <FormKit
          type="primeSlider"
          name="slider"
          label="Use Slider"
          :value="50"
          :step="2"
          :min="1"
          :max="200"
        />
        <FormKit
          type="primeInputMask"
          name="phone"
          label="Phone number"
          mask="(999) 999-9999"
          placeholder="(999) 999-9999"
          help="Please enter your phone number."
        />
        <FormKit
          type="primeSelectButton"
          name="selecter"
          label="Select something"
          value="three"
          :multiple="false"
          :options="selectOptions"
          data-key="value"
        />
        <FormKit
          type="primeRadioButton"
          name="radio"
          label="Radio button"
          :options="selectOptions"
          options_class="mt-1 flex flex-wrap gap-3"
          option_class="flex items-center"
        />
        <FormKit
          type="primeRadioButton"
          name="radio2"
          label="Radio button"
          :options="selectOptions"
          options_class="mt-1 flex flex-col gap-3"
          option_class="flex items-center"
          value="one"
        />
        <FormKit
          type="primeChips"
          name="chips"
          label="Some Chips"
          :max="3"
          :allow-duplicate="false"
          separarator=","
          :add-on-blur="true"
        />

        <FormKit
          type="primeInputSwitch"
          id="basic"
          name="basic"
          label="Basic"
        />
        <FormKit
          type="primeInputSwitch"
          id="eu"
          name="eu_citizen"
          label-right="Are you a european citizen:"
          option_class="flex items-center"
        />
        <FormKit
          type="primeInputSwitch"
          name="readonly"
          label="readonly does not work atn"
          readonly="true"
        />
        <FormKit
          type="primeInputSwitch"
          name="custom"
          label="custom values"
          true-value="A"
          false-value="B"
        />
        <FormKit
          type="primeDropdown"
          name="cookie_notice"
          label="Cookie notice Dropdown"
          value="hourly"
          :options="dropdownOptions"
          help="Cookie notice frequency ?"
        />
        <FormKit
          type="primeDropdown"
          name="styled"
          label="Styled"
          value="hourly"
          style="background:grey;"
          class="customClass"
          :options="dropdownOptions"
          :_disabled="true"
        />
        <FormKit
          type="primeDropdown"
          name="custom"
          label="With Clear and Filter"
          placeholder="Please select"
          :options="dropdownOptions"
          validation="required"
          :show-clear="true"
          :filter="true"
        />
      </div>
      <pre>{{ value }}</pre>
    </FormKit>
  </div>

</template>

<script setup lang="ts">

const selectOptions = [
  {
    label: 'Option 1',
    value: 'one'
  },
  {
    label: 'Option 2',
    value: 'two'
  },
  {
    label: 'Option 3',
    value: 'three'
  }
]

const dropdownOptions = [
  {
    label: 'very page load',
    value: 'refresh'
  },
  {
    label: 'Every hour',
    value: 'hourly'
  },
  {
    label: 'Every day',
    value: 'daily'
  }
]
</script>
