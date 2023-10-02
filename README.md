# How to use placeholder component

```js
<PlaceHolder loading={loading} rows={rows} type='media|text|round|rect'>
  <RealComponent />
</PlaceHolder>
<PlaceHolder type="media" rows={5} loading={loading}>
  <RealComponent />
</PlaceHolder>
<PlaceHolder loading={loading}>
  <RealComponent />
</PlaceHolder>
<PlaceHolder loading={loading} customPlaceholder={
    <>
      <div className={styles.customPlaceholder}>
        <PlaceHolder.Rectangle style={{width: '500px'}}/>
        <PlaceHolder.Round />
        <PlaceHolder.Rectangle />
      </div>
      <PlaceHolder.Text />
      <PlaceHolder.Text rows={1} style={{width: '30%'}} />
    </>
  }>
  <RealComponent />
</PlaceHolder>
```

# Implementation

Hybrid Approach: The implementation combines or integrates two different methods or strategies to achieve its goals. The system uses both of the following approaches for using placeholders.

Placeholder Usage: There are two ways to use placeholders within this implementation:

a. Specify Type: You can use a placeholder by specifying its type. The available types are:

- text: This likely means you can use a placeholder to represent or hold text data.
- rect: This suggests that you can use a placeholder for rectangular-shaped elements.
- round: This indicates that there's a placeholder option for round or circular elements.
- media: This implies that the system supports placeholders for media or multimedia content.

b. Custom Placeholder: Alternatively, you have the option to create a custom placeholder. To do this, you can leverage different shapes that are exposed or made available by the system. These shapes include round, rect (rectangular), and text. You can combine and manipulate these shapes as needed to create a custom placeholder, and then pass this custom placeholder as a property or parameter within the implementation.

In summary, the implementation allows users to work with placeholders in two ways: by specifying the type of placeholder they need (text, rect, round, or media), or by creating their own custom placeholders using exposed shapes (round, rect, text) and passing these custom placeholders as properties or parameters in the system. This hybrid approach provides flexibility and customization options for users working with placeholders in the system.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
