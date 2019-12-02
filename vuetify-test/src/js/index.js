new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    today: '2019-01-01',
    focus: '2019-01-01',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        name: 'Vacation',
        details: 'Going to the beach!',
        start: '2018-12-29',
        end: '2019-01-01',
        color: 'blue',
      },
      {
        name: 'Meeting',
        details: 'Spending time on how we do not have enough time',
        start: '2019-01-07 09:00',
        end: '2019-01-07 09:30',
        color: 'indigo',
      },
      {
        name: 'Large Event',
        details: 'This starts in the middle of an event and spans over multiple events',
        start: '2018-12-31',
        end: '2019-01-04',
        color: 'deep-purple',
      },
      {
        name: '3rd to 7th',
        details: 'Testing',
        start: '2019-01-03',
        end: '2019-01-07',
        color: 'cyan',
      },
      {
        name: 'Big Meeting',
        details: 'A very important meeting about nothing',
        start: '2019-01-07 08:00',
        end: '2019-01-07 11:30',
        color: 'red',
      },
      {
        name: 'Another Meeting',
        details: 'Another important meeting about nothing',
        start: '2019-01-07 10:00',
        end: '2019-01-07 13:30',
        color: 'brown',
      },
      {
        name: '7th to 8th',
        start: '2019-01-07',
        end: '2019-01-08',
        color: 'blue',
      },
      {
        name: 'Lunch',
        details: 'Time to feed',
        start: '2019-01-07 12:00',
        end: '2019-01-07 15:00',
        color: 'deep-orange',
      },
      {
        name: '30th Birthday',
        details: 'Celebrate responsibly',
        start: '2019-01-03',
        color: 'teal',
      },
      {
        name: 'New Year',
        details: 'Eat chocolate until you pass out',
        start: '2019-01-01',
        end: '2019-01-02',
        color: 'green',
      },
      {
        name: 'Conference',
        details: 'The best time of my life',
        start: '2019-01-21',
        end: '2019-01-28',
        color: 'grey darken-1',
      },
      {
        name: 'Hackathon',
        details: 'Code like there is no tommorrow',
        start: '2019-01-30 23:00',
        end: '2019-02-01 08:00',
        color: 'black',
      },
      {
        name: 'event 1',
        start: '2019-01-14 18:00',
        end: '2019-01-14 19:00',
        color: '#4285F4',
      },
      {
        name: 'event 2',
        start: '2019-01-14 18:00',
        end: '2019-01-14 19:00',
        color: '#4285F4',
      },
      {
        name: 'event 5',
        start: '2019-01-14 18:00',
        end: '2019-01-14 19:00',
        color: '#4285F4',
      },
      {
        name: 'event 3',
        start: '2019-01-14 18:30',
        end: '2019-01-14 20:30',
        color: '#4285F4',
      },
      {
        name: 'event 4',
        start: '2019-01-14 19:00',
        end: '2019-01-14 20:00',
        color: '#4285F4',
      },
      {
        name: 'event 6',
        start: '2019-01-14 21:00',
        end: '2019-01-14 23:00',
        color: '#4285F4',
      },
      {
        name: 'event 7',
        start: '2019-01-14 22:00',
        end: '2019-01-14 23:00',
        color: '#4285F4',
      },
    ],
    picker: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear

      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
  }
})