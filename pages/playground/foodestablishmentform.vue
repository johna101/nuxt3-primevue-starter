<template>
  <div class="card flex flex-wrap gap-12">
    <FormKit
        type="form"
        #default="{value}">
      <FormKit
          type="primeInputText"
          name="name"
          label="Name"/>
          <pre>{{ value }}</pre>
      <FormKit
          type="primeCalendar"
          name="date"
          label="Appointment date"
          placeholder="Select a date"
          help="Select a date to book your appointment."
          overlay
      />
      <FormKit
          type="email"
          label="Student email address"
          help="Please enter your student email address."
          validation="required|email|ends_with:.edu"
          validation-visibility="live"
          placeholder="vikas@school.edu"
      />
      <FormKit
          name="radio"
          type="radio"
          label="Preferred transportation"
          :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
          help="How do you like to get around?"
      />
      <pre>{{ value }}</pre>
    </FormKit>
  </div>

</template>

<script setup lang="ts">
</script>
