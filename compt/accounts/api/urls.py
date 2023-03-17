from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView,  TokenBlacklistView
from .views import (
    MyTokenObtainPairView,
    RegisterView
    
    )

urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', TokenBlacklistView.as_view(), name='token_blacklist'),
    path('register/', RegisterView.as_view(), name='register'),
]
