package com.androidsim;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.reactnativecommunity.checkbox.ReactCheckBoxPackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "androidsim";
  }
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new ReactCheckBoxPackage()
    );
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}
