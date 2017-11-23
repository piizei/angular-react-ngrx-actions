# Integrating React and Angular with RXJS/Store actions

This is a experiment of using RXJS/Store actions as an interface between different
complete separate apps in a page. In the example there is 2 independent [angular](https://angular.io/) apps and 
[a react app](https://reactjs.org/).

It seems nice and clean way to expose an existing interface to other components.

*Warning*: In general, you should avoid doing this and focus
on writing single-apps. For example using a root-level angular apps with modules is a more
convenient way of integration. There will be lot of troubles with routing etc. when you have
multiple independent frameworks in the page. [Angular modules](https://auth0.com/blog/real-world-angular-series-part-8/#ngmodules) give similar development experience 
as the lately hyped 'frontend-microservices' 
_You have been warned!_

If you use this approach, you should publish your action-interface via npm repository. Here 
I cut some corners and made an fake npm publish from app1 to other apps.

To run the project:
1. `git clone https://github.com/piizei/angular-react-ngrx-actions.git`
2. `cd angular-react-ngrx-actions`
3. `npm install`
4. `npm run build`
5. `npm start`
6. Open browser at [http://localhost:8080](http://localhost:8080)

In this experiment I use [pubsub-js](https://github.com/mroderick/PubSubJS) as a shared bus where the actions are passed.
One could obviously use events or something else as well.

Magic happens in following places:

Action consumer at [app1](app1/src/app/remote-action.service.ts):
```javascript
PubSub.subscribe( NAVBAR_QUEUE, (msg, action: Action) => {
  ngZone.run( () => store.dispatch(action));
});
```

Action producers with Angular [app2](app2/src/app/remote-action-client.service.ts)
and React [app3](app3/src/App.tsx)
```javascript
PubSub.publish( NAVBAR_QUEUE, action);

```


